import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { AddMenuss } from '../../Apicalls/Menubar'
import { toast } from 'react-toastify'
import MenuList from './MenuList'


const AddMenu = () => {
    const [selectedFile, setSelectedFile] = useState([]);
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    }=useForm()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };

    const [data,setData]=useState([]);
    const formSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('icon', data.icon);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('image', selectedFile);
      
        try {
          const response = await AddMenuss(formData);
          console.log(response, "respone");
          if (response.success) {
            setData(response.data);
            toast.success(response.message);
            console.log("hhhhhhhhhhai");
            reset();
          } else {
            toast.error(response.message);
          }
          console.log(data, "formdata");
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      };
   
  
console.log('image',selectedFile);
  return (
    <>
    <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit(formSubmit)} >
                        <div className="row">
                            <div className="col-12">
                                <div className="form-heading">
                                    <h4>Add Menus</h4>
                                </div>
                            </div>
                            <div className="col-10 col-md-5 col-xl-4">
                                <div className="form-group local-forms">
                                    <label>Name<span className="login-danger">*</span></label>
                                    <input
                                    {...register("name",{required:true,minLength:3})}
                                    type="text"
                                    className={`form-control ${errors.name? "is-invaild":""}`} />
                                    {errors.name && errors.name.type === 'required' && (
                                        <span className="text-danger">Name is required</span>
                                    )}
                                    {errors.name && errors.name.type === 'minLength' && (
                                        <span className="text-danger">Name must be at least 3 characters</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-10 col-md-5 col-xl-6">
                                <div className="form-group local-forms">
                                    <label>Icon<span className="login-danger">*</span></label>
                                    <input 
                                    {...register("icon",{required:true})}
                                    type="text"
                                     className={`form-control ${errors.icon? "is-invaild":""}`} />
                                      {errors.icon && errors.icon.type === 'required' && (
                                        <span className="text-danger">Icon is required</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-10 col-md-5 col-xl-4">
                                <div className="form-group local-forms">
                                    <label>Title<span className="login-danger">*</span></label>
                                    <input 
                                    {...register("title",{required:true})}
                                    type="text"
                                     className={`form-control ${errors.title? "is-invaild":""}`} />
                                      {errors.title && errors.title.type === 'required' && (
                                        <span className="text-danger">title is required</span>
                                    )}
                                </div>
                            </div>
                         
                            <div className="col-10 col-md-5 col-xl-6">
                            <div className="form-group local-forms">
                                <label>Image<span className="login-danger">*</span></label>
                                <input 
                                    type="file"
                                    onChange={handleFileChange}
                                    className="form-control"
                                />
                                </div>
                            </div>
                            <div className="col-10 col-md-10 col-xl-10">
                                <div className="form-group local-forms">
                                    <label>Description<span className="login-danger">*</span></label>
                                    <textarea 
                                    {...register("description",{required:true})}
                                    type="text"
                                     className={`form-control ${errors.description? "is-invaild":""}`} />
                                      {errors.description && errors.description.type === 'required' && (
                                        <span className="text-danger">description is required</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-12">
                                  <div className="doctor-submit text-end">
                                        <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <MenuList formdata={data} setformdata={setData}/>
    </>
  )
}

export default AddMenu