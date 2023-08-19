import React, { useState } from 'react'
import Form from '../../Elements/Form/Form'
import FlexCol from '../../Elements/Layout/FlexCol'
import API_DATA from '../../../API/API_DATA'
import { toast } from 'react-toastify'
import DashboardWrapper from '../../Elements/Layout/DashboardWrapper'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useNavigate } from 'react-router-dom'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
import FlexRow from '../../Elements/Layout/FlexRow'
import Svgs from '../../Elements/Svgs'


const AddBlog = () => {

  const navigate = useNavigate();
  const notify = (text) => toast.success(text);
  const notify_error = (text) => toast.error(text);

  const API = API_DATA()
  const [Image, setImage] = useState("")
  const [CreatedAt, setCreatedAt] = useState(Timestamp.now().toDate().toString())
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({});

  const [Blog, setBlog] = useState({
    title: '',
    category: '',
    image: ""
  })
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
    if (!Blog.title) {
      newErrors.title = 'Title is required';
    }
    if (!Blog.category) {
      newErrors.category = 'Category is required';
    }
    if (!description) {
      newErrors.description = 'Description is required';
    }
    if (!Image) {
      newErrors.image = 'Image is required';
    }
    return newErrors;
  };

  const onSubmitHandler = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      await addDoc(collection(db, "blogs"), {
        ...Blog,
        description,
        CreatedAt,
        image: Image
      }).then((data) => {
        console.log(data);
      }).catch((e) => {
        console.log("ERROR::", e);
      })
    } else {
      setErrors(newErrors);
    }
  }

  const imgHandle = (e) => {
    if (e.target?.files[0].size <= "50000") {
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
            <h1 className='text-[2rem]'>Add a new blog</h1>
          </FlexRow>
          <Form.Input error={errors.title} name="title" onChange={onChangeHandler} value={Blog.title} label={'Title'} />
          {/* <Form.Input name="description" onChange={onChangeHandler} value={Blog.description} label={'Description'} /> */}
          <FlexCol className={'mt-2'}>
            <p className='text-sm'>Description</p>
            <div className={`border ${errors.description && '!border-red-500'}`}>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data)
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
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
              { value: 'LATEST', label: 'LATEST' },
              { value: "EDITOR’S_PICKS", label: "EDITOR’S PICKS" },
              { value: 'ASIA_NEWS', label: 'ASIA NEWS' },
              { value: 'SPORT', label: 'SPORT' },
              { value: 'NEWS', label: 'NEWS' },
            ]} name="category" onChange={onChangeHandler} value={Blog.category} label={'Category'} />

          <Form.Input error={errors.image} accept={"image/*"} name="image" onChange={imgHandle} label={'Image'} type={'file'} />

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