import "./Letter.css";

export default function Letter() {
  return (
    <div className="section">

      <div className="body">
        <div className="left">
          <header className="bannerHolder">
            <img src="/banner.png" alt="Homecoming Banner" className="banner" />
          </header>

          <div className="letter">
            <p>
              Dear Reader, <br></br><br></br>

              [NOT REAL TEXT] Welcome to Columbia! As you immerse yourself in the
              University community and settle into your new home, you will encounter a
              campus facing a pivotal moment in its history as you, too, undergo significant change.
              You probably have lots of lingering questions about what the years ahead will look like
              and how to navigate all of Columbia’s different facets. Inside this special issue, you
              will find everything we at Spectator think first-year students should know as you acquaint
              yourself with campus life.
              <br></br><br></br>
              Spectator is a financially independent nonprofit organization and the largest
              student-run news media group on campus, serving tens of thousands of readers
              across Columbia, Morningside Heights, and West Harlem. We have a 148-year tradition
              of documenting history as it unfolds through in-depth, well-reported stories that
              hold institutional power to account.
              <br></br><br></br>
              Joining Spec is one of the best ways to kick off your four years at Columbia.
              When you become a member of the Spec family, nestled in our office in Riverside Church,
              you step into a community of sharp and passionate students who care deeply about the work they do.
              Joining Spec is one of the best ways to kick off your four years at Columbia. When you become a
              member of the Spec family, nestled in our office in Riverside Church. Joining Spec is one of the
              best ways to kick off your four years at Columbia. When you become a member of the Spec family,
              nestled in our office in Riverside Church, you step into a community of sharp and passionate students
              who care deeply about the work they do. Joining Spec is one of the best ways to kick off your four years
              at Columbia. When you become a member of the Spec family, nestled in our office in Riverside Church.
            </p>
          </div>

          <div className="signatures">
            <div className="signature">
              <div className="signatureName">First Last</div>
              <div className="signatureRole">Editor in Chief</div>
            </div>
            <div className="signature">
              <div className="signatureName">First Last</div>
              <div className="signatureRole">Managing Editor</div>
            </div>
          </div>
        </div>

        <div className="right">
          <img src="/logo.png" alt="Columbia Spectator Logo" className="logo" />

          <div className="picture">
            <div className="touchdown">TOUCHDOWN</div>
            <div className="image" role="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
