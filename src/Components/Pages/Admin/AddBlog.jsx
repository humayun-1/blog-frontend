import React, { useState } from 'react'
import Form from '../../Elements/Form/Form'
import FlexCol from '../../Elements/Layout/FlexCol'
import API_DATA from '../../../API/API_DATA'
import { toast } from 'react-toastify'
import DashboardWrapper from '../../Elements/Layout/DashboardWrapper'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {

  const navigate = useNavigate();
  const notify = (text) => toast.success(text);
  const notify_error = (text) => toast.error(text);

  const API = API_DATA()
  const [Image, setImage] = useState()
  const [description, setDescription] = useState('')
  const [Blog, setBlog] = useState({
    title: '',
    category: ''
  })
  // description: '',
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBlog((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const onSubmitHandler = () => {
    console.log(Blog);
    // console.log(Image);

    const token = localStorage.getItem("token")

    fetch(API.BASE_URL + API.CREATE_BLOG, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        ...Blog,
        image: Image,
        description
      }),
    }).then(resp => {
      return resp.json()

    }).then(data => {
      console.log(data);

      if (data.status == '201') {
        notify('Blog Created Successfully!');
        navigate('/')
      } else {
        if (data.message) {
          notify_error(data.message)
        } else {
          notify_error("Enable to login")
        }
      }
    });

  }

  const imgHandle = (e) => {
    readFileDataAsBase64(e.target.files[0]).then((byteArrData) => {
      let stringByteArr = byteArrData.toString()
      setImage(stringByteArr)
    }).catch((err) => {
      console.log(err);
    })

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
          <h1 className='text-[2rem]'>Add a new blog</h1>
          <Form.Input name="title" onChange={onChangeHandler} value={Blog.title} label={'Title'} />
          {/* <Form.Input name="description" onChange={onChangeHandler} value={Blog.description} label={'Description'} /> */}
          <FlexCol className={'mt-2'}>
            <p className='text-sm'>Description</p>
            <CKEditor

              editor={ClassicEditor}
              data="<p>This is a new blog!</p>"
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
          </FlexCol>
          <Form.Dropdown option={[
            { value: 'Technology', label: 'Technology' },
            { value: 'Business', label: 'Business' },
            { value: 'Politics', label: 'Politics' },
            { value: 'Sports', label: 'Sports' },
          ]} name="category" onChange={onChangeHandler} value={Blog.category} label={'Category'} />

          <Form.Input name="image" onChange={imgHandle} label={'Image'} type={'file'} />

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