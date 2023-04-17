import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { colors } from '../../../../styles';

const screenWidth = Dimensions.get('screen').width;

const AdminPanelScreenChart = ({ inStock = 0, outOfStock = 0 }) => {
  const data = [
    {
      name: 'Out of Stock',
      population: outOfStock,
      color: colors.color1_light,
      legendFontColor: colors.color2,
    },
    {
      name: 'In Stock',
      population: inStock,
      color: colors.color1_light2,
      legendFontColor: colors.color2,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={150}
      chartConfig={chartConfig}
      accessor={'population'}
      backgroundColor={'transparent'}
      paddingLeft={'15'}
      style={styles.chart}
      center={[10, 10]}
      absolute
    />
  );
};

export default AdminPanelScreenChart;

const styles = StyleSheet.create({
  chart: {
    paddingBottom: 50,
  },
});
