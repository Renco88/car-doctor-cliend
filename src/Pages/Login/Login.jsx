import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {
 const handleLogin= event => {
    event.preventDefault();

 }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
        <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onClick={handleLogin} className="card-body">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='my-4 ml-8'>New to car Doctors <Link to="/SignUp" className='text-orange-600 font-bold' >Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
