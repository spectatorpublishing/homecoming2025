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

              As alumni and parents flock to Morningside Heights for Homecoming, we’ve been reflecting on the past year of athletic accomplishments. <underline>In 2024, football reached new heights as the Lions topped the Ivy League table for the first time since 1961,</underline> while basketball, fencing, tennis, and others also had impressive seasons come winter and spring. 
              <br></br><br></br>
              <underline> While football has had a rocky start to its 2025 campaign, this Saturday’s game against Penn offers a chance for redemption in front of the Lions’ faithful. Will Columbia win its first Homecoming game since 2021?</underline>  In this special edition, we take a look at the Light Blue’s season so far, explore why <underline>head football coach Jon Poppe had such a standout first year at the helm,</underline> and dive into the history books to see how the program has evolved over the years. 
              <br></br><br></br>
              As Columbia continues to make its mark on the Ivy League, we’re reminded of the unique power that sports have to unite a community. Whether you’re making the trek up to Baker for the first time or you’re a lifelong Lions fan, we hope this edition puts you in the Homecoming spirit. 
              <br></br><br></br>
              Roar, Lion, Roar,
              Jillian Prunty and Arielle Rieder 
              Sports Editors
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
