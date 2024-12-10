import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id,price,img} = service;
  const {user} =useContext(AuthContext);


  const handleCheckOut = event => {
    event.preventDefault();

    const form =event.target;
    const name = form.name.value;
    const date =form.date.value;
    const email =user?.email;
    const booking ={
        customerName: name, 
        email, 
        img,
        date, 
        service: title,
        service_id: _id, 
        price: price
    }
    console.log(booking);

    fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'


        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })

  }

  return (
    <div>
      <h2 className="text-3xl text-center">Booked Service:{title}</h2>
      <form onSubmit={handleCheckOut} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$ '+price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;