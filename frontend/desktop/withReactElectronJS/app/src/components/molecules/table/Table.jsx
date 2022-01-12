import React from "react";
import ContentLoader from "react-content-loader";

import Styles from "./Table.module.css";

const Row = (product) => {
  return (
    <tr>
      <td>
        <img src={product.image_featured} />
      </td>
      <td>{product.name}</td>
      <td>Rp {product.price}</td>
    </tr>
  );
};

function SkeletonLoop(props) {
  for (let i = 0; i < 5; i++) {
    return (
      <ContentLoader
        speed={2}
        width={320}
        height={80}
        viewBox="0 0 320 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="80" y="16" rx="3" ry="3" width="150" height="11" />
        <rect x="80" y="34" rx="3" ry="3" width="100" height="11" />
        <rect x="250" y="24" rx="3" ry="3" width="60" height="11" />
        <rect x="20" y="10" rx="3" ry="3" width="44" height="44" />
      </ContentLoader>
    );
  }
}

function Table() {
  return (
    <div className={Styles.container}>
      <div>Table</div>
    </div>
  );
}

function TableMedium({ products, title }) {
  // console.log("PRODUCTS:", products.length);

  return (
    <div
      style={{
        border: "1px solid #cecece",
        borderRadius: "8px",
        padding: "10px",
      }}>
      <h4 style={{ fontWeight: "bold" }}>{title} </h4>
      <table>
        {products === undefined || products.length === 0 ? (
          <>
            <SkeletonLoop />
            <SkeletonLoop />
            <SkeletonLoop />
            <SkeletonLoop />
            <SkeletonLoop />
          </>
        ) : (
          products.map((product) => Row(product))
        )}
      </table>
    </div>
  );
}

export { TableMedium };
