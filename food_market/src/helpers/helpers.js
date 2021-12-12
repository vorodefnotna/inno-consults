export const getSum = ( products ) => {
  if ( !products ) return '0';
  return (
    products.reduce( ( acc, product ) => {
      const price = product.price.replace( /\D+/g, '' );
      return acc = +acc + +price;
    }, '' )
  );
};