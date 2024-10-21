import React from "react"; 
import axios from "axios";
import $ from "jquery";


axios.defaults.withCredentials = true;

const AxiosCompo = () => {

    const getBtnClickHandler = () => {
        getData();
    }

    //async
    const getData = async () => {
        console.log("getData");

        let msg = {
            'id' : 'gildong',
        
        }

        const queryString = new URLSearchParams(msg).toString();

        axios.get(`http://localhost:8090/axios/get_data?${queryString}`)
        .then(response => {
            console.log("response--->", response.data);
            console.log('[AxiosCompo] GET COMMUNICATION SUCCESS!');
        })
        .catch(e => {
            console.log('[AxiosCompo] GET COMMUNICATION Fail!');
        })
        .finally(() => {
            console.log('[AxiosCompo] GET COMMUNICATION Complete!');
        });


    // try catch 구문
      /*
        try {

            const response = await axios.get(`http://localhost:8090/axios/get_data?${queryString}`)
            console.log("response--->", response.data);
            console.log('[AxiosCompo] GET COMMUNICATION SUCCESS!');

        } catch(e) {

            console.log('[AxiosCompo] GET COMMUNICATION Fail!');

        } finally {
            console.log('[AxiosCompo] GET COMMUNICATION Complete!');

        }
             */

        


    }

    //POST
    const postBtnClickHandler = () => {
        postData();
    }

    const postData = async() => {
        console.log("postData()")

        axios.post('http://localhost:8090/axios/post_data', 
            {
                'id': 'gildong',
            }
        )
        .then(response => {
            console.log("");
            console.log('[AxiosCompo] post COMMUNICATION SUCCESS!');
        })
        .catch(e => {
            console.log('[AxiosCompo] post COMMUNICATION fail!');
        })
        .finally(() => {
            console.log('[AxiosCompo] post COMMUNICATION complete!');
        });

        // try {
        //     const response =  await axios.post('http://localhost:8090/axios/post_data',
        //         //post 방식은 body에 data를 담아야 한다.
        //     {
        //         'id': 'gildong',
        //     }
        // )
        //     console.log("");
        //     console.log('[AxiosCompo] POST COMMUNICATION SUCCESS!');
        // } catch(e) {
        //     console.log('[AxiosCompo] POST COMMUNICATION fail!');
        // } finally {
        //     console.log('[AxiosCompo] POST COMMUNICATION complete!');
        // }

    }


    //PUT
    const putBtnClickHandler = () => {
        putData();
    }

    const putData = async() => {
        console.log("putData()")

        axios.put('http://localhost:8090/axios/put_data', 
            {
                'id': 'gildong',
            }
        )
        .then(response => {
            console.log("");
            console.log('[AxiosCompo] PUT COMMUNICATION SUCCESS!');
        })
        .catch(e => {
            console.log('[AxiosCompo] PUT COMMUNICATION fail!');
        })
        .finally(() => {
            console.log('[AxiosCompo] PUT COMMUNICATION complete!');
        });

    /*
        try {
            const response =  await axios.put('http://localhost:8090/axios/put_data',
                //put 방식은 body에 data를 담아야 한다.
            {
                'id': 'gildong',
            }
        )
            console.log("");
            console.log('[AxiosCompo] POST COMMUNICATION SUCCESS!');
        } catch(e) {
            console.log('[AxiosCompo] POST COMMUNICATION fail!');
        } finally {
            console.log('[AxiosCompo] POST COMMUNICATION complete!');
        }
    */
    }

    //delete
    const deleteBtnClickHandler = () => {
        deleteData();
    }


    const deleteData = async() => {
        console.log("putData()")


    /*
        try {
            const response =  await axios.delete('http://localhost:8090/axios/delete_data',
                //delete 방식은 body에 data를 담아야 한다.
            {
                data: {
                    'id': 'gildong',
                }
            }
        )
            console.log("");
            console.log('[AxiosCompo] POST COMMUNICATION SUCCESS!');

        } catch(e) {
            console.log('[AxiosCompo] POST COMMUNICATION fail!');

        } finally {
            console.log('[AxiosCompo] POST COMMUNICATION complete!');

        }
    */
    }

    const transferFileBtnClickHandler = () => {
        transferFile();
    }

    const transferFile = async () => {
        console.log('transferFile()');

        let attach_files = $('input[name="attach_file"]');      // elements: Array
        let files = attach_files[0].files;                      // file: Array
        let file = files[0];                                    // file: Obj

        let formData = new FormData();
        formData.append('id', 'gildong');
        formData.append('attach_file', file);
        console.log('file: ', file);

        axios.post('http://localhost:8090/axios/transfer_file', formData)
        .then(response => {
            console.log('[AxiosComp] TRANSFER FILE CUMMUNICATION SUCESS!');

            console.log('response: ', response);
            console.log('response.data.data1: ', response.data.data1);
            console.log('response.data.data2: ', response.data.data2);
            console.log('response.data.data3: ', response.data.data3);
        })
        .catch(e => {
            console.log('[AxiosComp] TRANSFER FILE CUMMUNICATION FAIL!', e);
        })
        .finally(() => {
            console.log('[AxiosComp] TRANSFER FILE CUMMUNICATION COMPLETE!');
        });

        /*
        try {
            const response = await axios.post('http://localhost:8090/axios/transfer_file', formData);
            console.log('[AxiosComp] TRANSFER FILE CUMMUNICATION SUCESS!');

            console.log('response: ', response);
            console.log('response.data.data1: ', response.data.data1);
            console.log('response.data.data2: ', response.data.data2);
            console.log('response.data.data3: ', response.data.data3);



        } catch (e) {
            console.log('[AxiosComp] TRANSFER FILE CUMMUNICATION FAIL!', e);

        } finally {
            console.log('[AxiosComp] TRANSFER FILE CUMMUNICATION COMPLETE!');

        }
        */
    }

    // axios(), GET, DELETE 방식은 지원하지 않습니다.
    const postFormDataBtnClickHandler = () => {
        postFormData();
    }

    const postFormData = async () => {
        console.log("postFormData()");

        let formData = new FormData();
        formData.append('id', 'gildong');
        formData.append('pw', '1234');

        axios({
            url: 'http://localhost:8090/axios/post_formData',
            method: 'POST',
            data: formData,
        })
        .then(response => {
            console.log('[AxiosComp] POST FORMDATA CUMMUNICATION SUCESS!');

            console.log('response: ', response);
            console.log('response.data.data1: ', response.data.data1);
            console.log('response.data.data2: ', response.data.data2);
            console.log('response.data.data3: ', response.data.data3);
        })
        .catch(e => {
            console.log('[AxiosComp] POST FORMDATA CUMMUNICATION FAIL!', e);
        })
        .finally(() => {
            console.log('[AxiosComp] POST FORMDATA CUMMUNICATION COMPLETE!');
        });
        
/*
        try {
            const response = await axios.post('http://localhost:8090/axios/post_formData', formData);
            console.log('[AxiosComp] POST FORMDATA CUMMUNICATION SUCESS!');

            console.log('response: ', response);
            console.log('response.data.data1: ', response.data.data1);
            console.log('response.data.data2: ', response.data.data2);
            console.log('response.data.data3: ', response.data.data3);



        } catch (e) {
            console.log('[AxiosComp] POST FORMDATA CUMMUNICATION FAIL!', e);

        } finally {
            console.log('[AxiosComp] POST FORMDATA CUMMUNICATION COMPLETE!');

        }
*/
    }

    const deleteFormDataBtnClickHandler = () => {
        deleteFormData();
    }

    const deleteFormData = () => {
        console.log("deleteFormData()");

        let formData = new FormData();

        formData.append('id', 'gildong');
        formData.append('pw', '1234');

        //Delete method의 경우 axios.delete는 사용할 수 없지만 axios() 방식은 가능합니다.
        axios({
            url: 'http://localhost8090/axios/delete_formdata',
            method: 'DELETE',
            data: formData,
        })
        .then(response => {
            console.log('response-->', response);
            console.log("delete formdata dto communication success!");
        })
        .catch(e => {
            console.log("delete formdata dto communication fail!");
        })
        .finally(() => {
            console.log("delete formdata dto communication complete!");
        });
    }

    const putFormDataBtnClickHandler = () => {
        putFormData();
    }

    const putFormData = async() => {
        console.log("putFormData()");

        let formData = new FormData();
        formData.append('id', 'gildong');
        formData.append('pw', '1234');


        axios()
        .then()
        .catch()
        .finally();
    }

    const postFormDataDtoBtnClickHandler = () => {
        postFormDataDto();
    }

    const postFormDataDto = async() => {
        console.log("postFormDataDto()");

        let formData = new FormData();
        formData.append('id', 'gildong');
        formData.append('pw', '1234');
        formData.append('email', 'gildong@gmail.com');

        try{

            const response = await axios.post('http://localhost:8090/axios/post_formdata_dto', formData);
            console.log('response-->', response);
            console.log("post formdata dto communication success!");

        } catch(e) {
            console.log("post formdata dto communication fail!");

        }
    }

    return(
        <>
            <input type="button" value="GET BUTTON" onClick={getBtnClickHandler}/><br />
            <input type="button" value="POST BUTTON" onClick={postBtnClickHandler}/><br />
            <input type="button" value="PUT BUTTON" onClick={putBtnClickHandler}/><br />
            <input type="button" value="DELETE BUTTON" onClick={deleteBtnClickHandler}/><br />
            <input type="file" name="attach_file" /><br />
            <input type="button" value="transfer" onClick={transferFileBtnClickHandler} /><br />
            <input type="button" value="POST BUTTON BY FORMDATA" onClick={postFormDataBtnClickHandler} /><br />
            <input type="button" value="PUT BUTTON BY FORMDATA" onClick={putFormDataBtnClickHandler} /><br />
            <input type="button" value="PUT BUTTON BY FORMDATA" onClick={deleteFormDataBtnClickHandler} /><br />
            <input type="button" value="POST BUTTON BY FORMDATA FOR DTO" onClick={postFormDataDtoBtnClickHandler}/>
        </>
    )
}

export default AxiosCompo;


