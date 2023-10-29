import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css';
const Register = () => {
  return <Helmet title='login'>
    <CommonSection title='login'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center'>
            <form className="form mb-5">
            <div className="form__group">
                <input type="text" placeholder='name' required />
              </div>
              <div className="form__group">
                <input type="Email" placeholder='Email' required />
              </div>
              <div className="form__group">
                <input type="password" placeholder='Password' required />
              </div>
              <button className="addTOCart__btn">Create</button>
            </form>
            <Link to='/login'>Login To Account</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Register