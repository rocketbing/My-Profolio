export default function Projects() {
  return (
    <section className="container">
      <br />
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>My Works</h1>
        </div>
      </div>
      <div className="projectList d-flex justify-content-between">
        <div className="card m-5">
          <img className="card-img-top" src="/img/Admin_Dash/Screenshot 2025-06-02 at 2.46.02 PM.png" alt="Card image" />
          <div className="card-body cardBody mt-auto">
            <h4 className="card-title">Currency Converter Mobile App (School Project)</h4>
            <p className="card-text">A React Native mobile app that provides real-time currency conversion with a user-friendly dual-screen interface.</p>
            <a href="#" className="btn btn-primary">Go to the website</a>
          </div>
        </div>
        <div className="card m-5">
          <img className="card-img-top" src="/img/Converter/Screenshot 2025-06-02 at 3.06.06 PM.png" alt="Card image" />
          <div className="card-body cardBody">
            <h4 className="card-title">Online Shopping Platform (In Progress)</h4>
            <p className="card-text">A responsive and multilingual user authentication platform built with Vue 3.</p>
            <a href="#" className="btn btn-primary">Go to the app</a>
          </div>
        </div>
        <div className="card m-5">
          <img className="card-img-top" src="/img/CPMP/cpmp.png" alt="Card image" />
          <div className="card-body cardBody">
            <h4 className="card-title">Another Project</h4>
            <p className="card-text">Project summary coming soon.</p>
            <a href="#" className="btn btn-primary">Go to the website</a>
          </div>
        </div>
      </div>
    </section>
  )
}


