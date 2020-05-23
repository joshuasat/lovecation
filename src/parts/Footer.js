import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <>
      <footer className="d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-auto" style={{ width: 350 }}>
              <IconText />
              <p className="brand-tagline">
                We will make your holiday memorable and unforgetable.
              </p>
            </div>
            <div className="col-auto mr-5">
              <h6 className="mt-2">For Beginners</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    New Account
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/properties">
                    Start Booking a Room
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/use-payments">
                    Use Payments
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2 mr-5">
              <h6 className="mt-2">Explore Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/careers">
                    Our Careers
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/privacy">
                    Privacy
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/terms">
                    Terms & Conditions
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h6 className="mt-2">Connect Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="mailto:support@lovecation.id"
                  >
                    support@lovecation.id
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal type="link" href="tel:+6287782557528">
                    0877 - 8255 - 7528
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Lovecation, Bogor, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2020 • All rights reserved • Lovecation
            </div>
          </div>
        </div>
      </footer>

      <footer className="d-block d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <IconText />
              <p className="brand-tagline">
                We will make your holiday memorable and unforgetable.
              </p>
            </div>
            <div className="col-5">
              <h6 className="mt-2">For Beginners</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    New Account
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/properties">
                    Start Booking a Room
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/use-payments">
                    Use Payments
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-7">
              <h6 className="mt-2">Connect Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button isExternal type="link" href="support@lovecation.id">
                    support@lovecation.id
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal type="link" href="tel:+6287782557528">
                    0877 - 8255 - 7528
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Lovecation, Bogor, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2020 • All rights reserved • Lovecation
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
