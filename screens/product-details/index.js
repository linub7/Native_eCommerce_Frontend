import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { useEffect, useRef, useState } from 'react';
import Toast from 'react-native-toast-message';

import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import ProductDetailsScreenInfo from '../../components/product-details/info';
import { loadingStatus } from '../../store/slices/loadingSlice';
import { getSingleProductHandler } from '../../api/product';
import { getProductDetailsAction } from '../../store/slices/productSlice';
import CustomLoader from '../../components/shared/custom-loader';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetailsScreen = ({ route: { params } }) => {
  const [quantity, setQuantity] = useState(1);
  const carouselRef = useRef();

  const { loading } = useSelector((state) => state.loading);
  const { product } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetProductDetail();
  }, [params?.id]);

  const handleGetProductDetail = async () => {
    dispatch(loadingStatus({ status: true }));
    const { err, data } = await getSingleProductHandler(params?.id);
    if (err) {
      console.log(err);
      dispatch(loadingStatus({ status: false }));
      return Toast.show({
        type: 'error',
        text1: err,
      });
    }
    dispatch(loadingStatus({ status: false }));
    dispatch(getProductDetailsAction({ product: data?.data?.data }));
  };

  const imageUnavailable = [
    {
      id: 'image-unavailable-at-this-time',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png',
    },
  ];

  return loading ? (
    <CustomLoader size={100} color={colors.color3} />
  ) : (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={carouselRef}
        data={product?.photos?.length > 0 ? product?.photos : imageUnavailable}
        renderItem={CarouselItem}
      />
      <ProductDetailsScreenInfo
        description={product?.description}
        name={product?.name}
        price={product?.price}
        quantity={quantity}
        setQuantity={setQuantity}
        stock={product?.stock}
        _id={product?._id}
        image={product?.photos[0]?.url}
      />
    </View>
  );
};

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.imageContainer} key={index}>
      <Image source={{ uri: item?.url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: colors.color1,
  },
  imageContainer: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: 'contain',
    height: 250,
  },
});

export default ProductDetailsScreen;
