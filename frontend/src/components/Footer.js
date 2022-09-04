import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    
        <MDBFooter
          bgColor='light'
          className='text-center text-lg-start text-muted'
        >
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon='linkedin' />
              </a>
              <a href='/' className='me-4 text-reset'>
                <MDBIcon fab icon='github' />
              </a>
            </div>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                   <i class="fab fa-angular "></i>
                    ACCORD
                  </h6>
                  <p>
                    Helloo, Thinking of buying a new phone?
                    Then this is the place,  Here we deal with premium smart phone which are considered to be the best. Maaking Us the best.
                    </p>
                </MDBCol>

                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Apple
                    </a>
                  </p>
                  <p>
                    <a href='#samsung' className='text-reset'>
                      Samsung
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Pixel
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Oneplus
                    </a>
                  </p>
                </MDBCol>



                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon='home' className='me-2' />
                    Kochi, Kerala, India
                  </p>
                  <p>
                    <MDBIcon icon='envelope' className='me-3' />
                    support@accord.com
                  </p>
                  <p>
                    <MDBIcon icon='phone' className='me-3' /> + 91 7223 4567 88
                  </p>
                  <p>
                    <MDBIcon icon='print' className='me-3' /> + 91 7223 4567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className='text-center p-4'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
          >
            © 2022 Copyright:
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              accord.com
            </a>
          </div>
        </MDBFooter>
  )
}

export default Footer
