import {useForm} from "react-hook-form";

import {createComments} from "../../services";


const Comments = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                body: 'body',
                email: 'hoproish@gmail.com'
            }
        }

    );
    const submit = (object) => {
        createComments(object).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text'{...register('name', {required: true})}/>
                {
                    errors.name && <span>Field si required</span>
                }
                <input type='text'{...register('body')}/>
                <input type='text'{...register('email')}/>
                <input type='submit'/>
            </form>
        </div>
    );
};

export {Comments};