const SuccessMessage = () => {
  return (
    <div className="success-message">
      <img src="./images/icon-success.svg" alt="" />

      <h1>Thanks for Subscribing</h1>

      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>

      <button className="button">Dismiss Message</button>
    </div>
  );
};

export default SuccessMessage;
