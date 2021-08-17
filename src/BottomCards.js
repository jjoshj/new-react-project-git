export function BottomCards() {
  return (
    <div >
      {/*<!-- Illustrations -->*/}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "50%" }}
              src="data:image/jpeg;base64,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"
              alt="..." />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            aspernatur sequi mollitia natus ab atque dolorum vel quasi,
            repellendus recusandae at quo aliquid sit minima? Ea autem provident
            libero a?
          </p>
        </div>
      </div>

      {/*<!-- Approach -->*/}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Development Approach
          </h6>
        </div>
        <div className="card-body">
          <p>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor 
          page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
<p>
Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
          </p>
        </div>
      </div>
    </div>
  );
}
