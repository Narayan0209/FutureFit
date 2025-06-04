import React, { useEffect, useState } from 'react';
import { RiSearchEyeLine } from "react-icons/ri"
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


type formdata = {
  name: string,
  age: any,
  address: string
}
const Form = () => {
  const [users, setUsers] = useState<any>([]);
  const [formEntry, setFormEntry] = useState<formdata>({ name: '', age: '', address: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [errors, setErrors] = useState<any>({});
  const [filteredData, setFilteredData] = useState<any>(users);

  useEffect(() => {
    setFilteredData(users)
  }, [users])


  const inputDataChange = (event: any) => {
    const { name, value } = event.target;
    setFormEntry({ ...formEntry, [name]: value });
  };

  const submitData = (event: any) => {
    event.preventDefault();

    const newerror = validation(formEntry);
    setErrors(newerror);

    if (Object.keys(newerror).length > 0) {
      console.log("is in error mode ");
    }
    else {
      console.log("there should no error ")
      if (isEditing) {
       let updatedUser = [...users];
       console.log("formentry data ", formEntry) //data which is updated 
       updatedUser[editIndex] = formEntry
       setUsers(updatedUser);
       setIsEditing(false);
      }
      else {
        setUsers([...users, formEntry]);
      }
      setFormEntry({ name: '', age: '', address: '' });
    }
  };
  
  useEffect( () => { //this useEffect is used to resolve the side effect of useState where useState is getting last value instead of current value 
     if(users.length > 0){
      const edittedUser = {name : users[editIndex].name ,age:users[editIndex].age ,address:users[editIndex].address}
      setFormEntry(edittedUser);
      console.log(formEntry);
     }
  }, [editIndex])

  const editData = (index: number) => {
    console.log(users[index])  // data to be updated at index
    setFormEntry(users[index])
    setIsEditing(true);
    // setTimeout(() => setForm(index), 1000) 
    setEditIndex(index);
    console.log(index);  // index where the data is
  };


  const deleteData = (index: number) => {
    const newUser = users.filter((user: any, i: any) => i !== index);
    setUsers(newUser);
  };

  const validation = (data: any) => {
    const error: any = {};

    if (data.name.trim() == '') {
      error.name = '*Name is required';
    }
    else if (data.name.length > 50) {
      error.name = '*Use only 15 characters'
    }

    if (data.age.trim() == '') {
      error.age = '*Age is required';
    }
    else if (isNaN(data.age) || data.age < 1 || data.age > 90) {
      error.age = '*Age should be between 1 to 90';
    }

    if (data.address.trim() == '') {
      error.address = '*Address is required';
    }
    else if (data.address.length > 100) {
      error.address = '*Max Word Limit Is 100'
    }

    return error;
  }

  const handleSearch = (value: any) => {
    let filteredData = users?.filter((item: any) => item?.name?.toLowerCase()?.includes(value));
    setFilteredData(filteredData)
  }

  // useEffect(() => {
  //   function x(){
  //     console.log("x");
  //   }
  //   x();
  // },[])
 
  return (
    <div className='p-4 max-w-lg mx-auto '>
      {/* <h1 className='text-center text-xl'>User</h1> */}
      <div className='bg-white p-6 rounded shadow-md'>
        <form onSubmit={submitData}>

          <input
            className="p-2 border bg-blue-50 mb-4 border-gray-300 rounded w-full"
            type='text'
            name='name'
            value={formEntry.name}
            onChange={inputDataChange}
            placeholder='Enter Name'
          />
          {errors.name && <span className='text-red-500'>{errors.name}</span>}

          <input
            className="p-2 border bg-blue-50 mb-4 border-gray-300 rounded w-full"
            type='text'
            name='age'
            value={formEntry.age}
            onChange={inputDataChange}
            placeholder='Enter Age'
          />
          {errors.age && <span className='text-red-500'>{errors.age}</span>}

          <input
            className="p-2 border bg-blue-50 mb-4 border-gray-300 rounded w-full"
            type='text'
            name='address'
            value={formEntry.address}
            onChange={inputDataChange}
            placeholder='Enter Address'

          />
          {errors.address && <span className='text-red-500'>{errors.address}</span>}
          <div className='flex'>
          <button type='submit' className='text-white bg-blue-500 p-2 w-full rounded'>
            {isEditing ? 'Update' : 'Submit'}
          </button>
          <button
            type='reset'
            className='text-white bg-blue-500 ml-4 p-2 w-full rounded'
            onClick={() => {
              setFormEntry({ name: '', age: '', address: '' });
              setIsEditing(false);
              setErrors({})
            }}
          >
            {isEditing ? 'Cancel' : 'Reset'}
          </button>
          </div>
        </form>
      </div>
      {
        users.length > 0 &&
        (
          <div className='bg-white p-6 rounded shadow-md mt-4'>
            <h1 className='text-center'>List of Users</h1>
            <div className=' border mb-4 border-gray-300 rounded'>
              <form className='w-full flex justify-between'>
                <input className=' border p-2 h-full w-full'
                  type='search'
                  onChange={(e: any) => handleSearch(e?.target?.value)}
                  placeholder='Search...'
                >
                </input>
                <button type='submit'
                  className='bg-blue-400 border text-white pt-2 pb-3 pl-2 pr-2'><RiSearchEyeLine /></button>
              </form>
            </div>

            <p className={`text-red-500 text-center ${filteredData == '' ? ('') : ('hidden')}`}>User Not Found</p>

            <ul>
              {filteredData.map((user: any, index: any) => (

                <li className='flex justify-between items-center border-b border-t p-4 mb-2 ' key={index}>
                  <div>
                    {`Name : ${user.name}, Age : ${user.age}, Address: ${user.address}`}
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => editData(index)}
                      className='text-2xl p-2 rounded'
                    >
                      <CiEdit />
                    </button>
                    <button
                      onClick={() => deleteData(index)}
                      className=' text-2xl text-red-500 p-2 rounded'
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};
export default Form;
