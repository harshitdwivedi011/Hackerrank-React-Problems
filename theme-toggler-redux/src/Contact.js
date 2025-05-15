import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((state) => state.toggleReducer.theme);
  const contactStyle = {
    background: theme === "dark" ? "white" : "black",
    color: theme === "dark" ? "black" : "white",
  };

  return (
    <div className="container mt-5 mb-5 ">
      <div className="row">
        <div className="col-xl-4"></div>
        <div className="col-xl-4 rounded p-4 mb-5" style={contactStyle}>
          <h3 className="mb-4 text-center">Contact Us</h3>
          <div className="mb-4">
            <label for="">Full Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-4">
            <label for="">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-4">
            <label for="">Mobile No.</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-4">
            <label for="">Message</label>
            <textarea className="form-control"></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-warning">Send Message</button>
          </div>
        </div>
        <div className="col-xl-4"></div>
      </div>
    </div>
  );
};

export default Contact;
