const Newsletter = () => {
  return (
    <div className="newsletter">
      <picture>
        <source
          srcSet="/images/illustration-sign-up-desktop.svg"
          media="(min-width: 30rem)"
        />
        <img src="./images/illustration-sign-up-mobile.svg" alt="" />
      </picture>

      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className="checkmark-list">
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>

      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="email@company.com" />
        </div>

        <button className="button">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

export default Newsletter;
