import React from "react";

export default function Cart({ cart, addToCart, removeFromCart }) {
  const total = cart.reduce((s, i) => s + Number(i.price) * i.qty, 0);

  return (
    <main
      className="page container"
      style={{
        paddingTop: "20px",     // top spacing fixed
        minHeight: "calc(100vh - 100px)", // footer ke overlap ke liye
        boxSizing: "border-box"
      }}
    >
      <h2 className="page-title" style={{ marginTop: 0 }}>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty">No items in cart.</div>
      ) : (
        <>
          <section className="cart-grid">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-thumb">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/120x90?text=No+Image";
                    }}
                  />
                </div>
                <div className="cart-info">
                  <div className="cart-title">{item.title}</div>
                  <div className="cart-price">
                    ₹ {item.price} × {item.qty}
                  </div>
                </div>
                <div className="cart-actions">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </section>

          <div className="cart-summary">
            <div>Total</div>
            <div className="total-amount">₹ {total.toFixed(2)}</div>
          </div>
        </>
      )}
    </main>
  );
}
