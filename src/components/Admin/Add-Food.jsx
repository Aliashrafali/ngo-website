import React, { useState } from "react";
import Index from "./Index";

const Add_Food = () =>{

    const[food, setFood] = useState({
        fname:'',
        ftype:'',
        pdate:'',
        edate:'',
        address:'',
        image:''
    });

    const onValueChange = (e) =>{
        setFood({
            ...food,
            [e.target.name] : e.target.value
        });
        console.log(food);
    }
    const fileData = (e) =>{
        setFood({...food, image:e.target.files[0]});
    }

    // start in the next class
    return(
        <>
            <Index />
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-12"></div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="food-form p-3">
                            <h5 className="text-white">Fill Food Information</h5><hr className="hr"></hr>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Food Name <sup><span className="text-white">*</span></sup></label>
                                            <input type="text" name="fname" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Food Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Food Type <sup><span className="text-white">*</span></sup></label>
                                            <input type="text" name="ftype" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Food Type" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Pickup Date <sup><span className="text-white">*</span></sup></label>
                                            <input type="date" name="pdate" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Expiry Date <sup><span className="text-white">*</span></sup></label>
                                            <input type="date" name="edate" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Pickup Address <sup><span className="text-white">*</span></sup></label>
                                            <textarea className="form-control" onChange={onValueChange} name="address" placeholder="Address...">

                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Pickup Address</label>
                                            <input type="file" name="image" onChange={fileData} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div style={{display:'block', float:'right'}}>
                                            <button className="btn btn-danger" style={{marginRight:'7px'}}>Reset</button>
                                            <button className="btn btn-light">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_Food