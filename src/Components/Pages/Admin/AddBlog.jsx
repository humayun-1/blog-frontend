import React, { useEffect, useState } from 'react'
import Form from '../../Elements/Form/Form'
import FlexCol from '../../Elements/Layout/FlexCol'
import { toast } from 'react-toastify'
import DashboardWrapper from '../../Elements/Layout/DashboardWrapper'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useNavigate } from 'react-router-dom'
import { Timestamp, addDoc, collection, getDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
import FlexRow from '../../Elements/Layout/FlexRow'
import Svgs from '../../Elements/Svgs'
import Categories from '../../Data/Categories'


const AddBlog = () => {

  const queryParams = new URLSearchParams(window.location.search);
  const queryId = queryParams.get('id');
  const [Edit, setEdit] = useState(false)

  const navigate = useNavigate();
  const notify = (text) => toast.success(text);
  const notify_error = (text) => toast.error(text);

  const [Image, setImage] = useState("")
  const [CreatedAt, setCreatedAt] = useState(Timestamp.now().toDate().toString())
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [Blog, setBlog] = useState({
    title: '',
    category: '',
    image: "",
    url: "",
  })

  useEffect(() => {
    if (queryId) {
      setEdit(true);
      const docRefff = doc(db, "blogs", queryId);
      getDoc(docRefff).then(doc => {
        setBlog(doc.data())
      }).catch(err => {

        console.log(err, 'asdsaa');
        toast.error('Something Went Wrong!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/admin/blogs');

      })
    }
  }, [])


  // description: '',
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBlog((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const validateForm = () => {
    const newErrors = {};
    if (!Blog.title && !(Blog?.title)) {
      newErrors.title = 'Title is required';
    }
    if (!Blog.category && !(Blog?.category)) {
      newErrors.category = 'Category is required';
    }
    if (!description && !(Blog?.description)) {
      newErrors.description = 'Description is required';
    }
    if (!Image && !(Blog?.image)) {
      newErrors.image = 'Image is required';
    }
    if (!Blog.url && !(Blog?.url)) {
      newErrors.image = 'URL is required';
    }
    return newErrors;
  };

  const onSubmitHandler = async () => {
    let newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {

      setIsLoading(true);

      const toastId = toast.info('Loading...', {
        position: "top-right",
        autoClose: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });

      if (Edit) {
        const docRef = doc(db, 'blogs', queryId);
        await updateDoc(docRef, {
          ...Blog,
          description: description ? description : Blog?.description,
          CreatedAt,
          image: Image ? Image : Blog?.image
        }).then(() => {
          setIsLoading(false);
          toast.dismiss(toastId); // Dismiss the loading toast
          toast.success('Blog Updated!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/admin/blogs');
        }).catch(err => {
          toast.error('Something Went Wrong!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/admin/blogs');
        });
      } else {
        await addDoc(collection(db, "blogs"), {
          ...Blog,
          description,
          CreatedAt,
          image: Image
        }).then((data) => {

          // notify("Blog Created Successfully");
          setIsLoading(false);
          toast.dismiss(toastId); // Dismiss the loading toast
          toast.success('Blog Uploaded!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          navigate('/admin/blogs');

        }).catch((e) => {
          console.log("ERROR::", e);
        })
      }


    } else {
      setErrors(newErrors);
    }
  }

  const imgHandle = (e) => {
    if (e.target.value && e.target?.files[0].size <= "50000") {
      readFileDataAsBase64(e.target.files[0]).then((byteArrData) => {
        let stringByteArr = byteArrData.toString()
        setImage(stringByteArr)
      }).catch((err) => {
        console.log(err);
      })
    } else {
      notify_error("Upload Image less than 60 KB!")
      e.target.value = ''
    }
  }

  function readFileDataAsBase64(file) {
    const blob = new Blob([file], {
      type: "application/image",
    });

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(blob);
    });
  }
  return (
    <>
      <DashboardWrapper active={"blog"}>
        <FlexCol className={''}>
          <FlexRow>
            <div className='rotate-180 cursor-pointer' onClick={() => {
              navigate('/admin/blogs')
            }}>
              <Svgs.Arrow fill={'#000'} />
            </div>
            <h1 className='text-[2rem]'>{Edit ? "Edit Blog" : " Add a new blog"}</h1>
          </FlexRow>
          <Form.Input error={errors.title} name="title" onChange={onChangeHandler} value={Blog?.title} label={'Title'} />
          <Form.Input error={errors.url} name="url" onChange={onChangeHandler} value={Blog?.url} label={'URL'} placeholder={'Enter Blog URL'} />
          <FlexCol className={'mt-2'}>
            <p className='text-sm'>Description</p>
            <div className={`border ${errors.description && '!border-red-500'}`}>
              <CKEditor
                editor={ClassicEditor}
                data={Blog?.description ? Blog?.description : description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data)
                }}
              />
            </div>
            {
              errors.description && <p className='text-sm text-red-500'>{errors.description}</p>
            }
          </FlexCol>
          <Form.Dropdown
            error={errors.category}
            option={[
              { value: '', label: 'Select Category' },
              ...(Object.keys(Categories).map(category => ({
                value: Categories[category],
                label: category,
              })))

            ]} name="category" onChange={onChangeHandler} value={Blog?.category} label={'Category'} />

          <Form.Input error={errors.image} accept={"image/*"} name="image" onChange={imgHandle} label={'Image'} type={'file'} />

          {
            Blog?.image || Image ? <img src={Image ? Image : Blog?.image} alt="" className='h-[8rem] w-[10rem] object-cover rounded-lg' /> : ""
          }

          <div>
            <Form.Button onClick={onSubmitHandler}>
              Submit
            </Form.Button>
          </div>
        </FlexCol>
      </DashboardWrapper>
    </>
  )
}

export default AddBlog