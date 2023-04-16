import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { colors, defaultStyle } from '../../styles';
import HeaderComponent from '../../components/shared/header';
import Carousel from 'react-native-snap-carousel';
import { useRef, useState } from 'react';
import ProductDetailsScreenInfo from '../../components/product-details/info';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetailsScreen = ({ route: { params } }) => {
  console.log(params);
  const [quantity, setQuantity] = useState(1);
  const carouselRef = useRef();

  const name = 'Bottle';
  const price = 220;
  const stock = 10;
  const description =
    'llnlanclaclalcna;c,a;ca mcamc;amcacnaa lmlmvlava nlavnlva lnlvalvavlmalvmalvma nvrvruvnvrjrvjnvjrvr lamcmlalcmalcmalcma lvlavlmvalmva lmlvmalmva lmclamclam kimrfrfr vrvmfvf';
  const images = [
    {
      id: 'bottle-lmmcalca',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS1J2KHiDCismfBDSncXO-wqLfddfz3VuPwi3nlav&s',
    },
    {
      id: 'camera-lamclamca',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN0_NvJuLGMVD_HxY2bQ4XgZEiQ4PeH38w715AYBPg&s',
    },
    {
      id: 'cream-kancacaal',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8uiBrVAT7UARXvDO9vmbWkLubt1igCNF3v2gvujQ&s',
    },
    {
      id: 'Watch-jhhhdakdahhdac',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD_PUwfdtYND0PnoTrWw4URh0YRdmzJ6bchohYpIm1w&s',
    },
  ];

  return (
    <View style={[defaultStyle, styles.container]}>
      <HeaderComponent back={true} />
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={carouselRef}
        data={images}
        renderItem={CarouselItem}
      />
      <ProductDetailsScreenInfo
        description={description}
        name={name}
        price={price}
        quantity={quantity}
        setQuantity={setQuantity}
        stock={stock}
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
