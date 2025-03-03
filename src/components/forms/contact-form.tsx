"use client";

import { useForm } from 'react-hook-form';
import { Button } from '../ui/common';

type FormImputs = {
    fullName: string;
    email: string;
    message: string;
    desiredService: string;
    company?: string;
}


export const ContactForm = () => {

    const { handleSubmit, register, formState: { isValid, errors }, reset } = useForm<FormImputs>({
        // defaultValues: {
        //     company: "JD Compoany Inc.",
        //     desiredService: "web-development",
        //     email: "jd@google.com",
        //     fullName: "Jhon Doe",
        //     message: "This is a placeholder message"
        // }
    });
    const onSubmit = (data: FormImputs) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20' method='POST'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="fullName" className='text-xl'>Nombre <span className='text-primary'>*</span></label>
                <input placeholder='Ingresa tu nombre y apellido' type="text" aria-invalid={errors.fullName ? "true" : "false"} className='border-b-foreground-muted border-b-2 focus:outline-none focus:bg-foreground/10 py-2' {...register('fullName', { required: true })} />
                {errors.fullName?.type === "required" && (
                    <p role="alert" className='text-primary'>Debes ingresar tu nombre.</p>
                )}

            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Email <span className='text-primary'>*</span></label>
                <input placeholder='Ingresa tu email' type="email" aria-invalid={errors.email ? "true" : "false"} className='border-b-foreground-muted border-b-2 focus:outline-none focus:bg-foreground/10 py-2' {...register('email', { required: true, pattern: /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/ })} />
                {errors.email?.type === "required" && (
                    <p role="alert" className='text-primary'>Debes ingresar un email válido.</p>
                )}
                {errors.email?.type === "pattern" && (
                    <p role="alert" className='text-primary'>Debes ingresar un email válido.</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="company" className='text-xl'>Empresa</label>
                <input placeholder='Ingresa el nombre de tu empresa o emprendimiento' type="text" className='border-b-foreground-muted border-b-2 focus:outline-none focus:bg-foreground/10 py-2' {...register('company')} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="desiredService" className='text-xl'>Servicio de interes <span className='text-primary'>*</span></label>
                <select id="" aria-invalid={errors.desiredService ? "true" : "false"} className='border-b-foreground-muted border-b-2 focus:outline-none focus:bg-foreground/10 py-2' defaultValue={""} {...register('desiredService', { required: true })}>
                    <option value="" className='bg-background' disabled>Selecciona una opcion</option>
                    <option value="web-development" className='bg-background'>Desarrollo Web</option>
                    <option value="software-development" className='bg-background'>Desarrollo de software</option>
                    <option value="uxui-design" className='bg-background'>Diseño UX/UI</option>
                    <option value="seo-optimization" className='bg-background'>Optimización de SEO</option>
                    <option value="dedicated-support" className='bg-background'>Soporte Dedicado</option>
                    <option value="update-redesign" className='bg-background'>Actualizacion/Rediseño</option>
                    <option value="integrations" className='bg-background'>Integraciones</option>
                    <option value="consultancy" className='bg-background'>Consultoria</option>
                    <option value="other" className='bg-background'>Otro</option>
                </select>
                {errors.desiredService?.type === "required" && (
                    <p role="alert" className='text-primary'>Debes seleccionar un servicio.</p>
                )}
            </div>
            <div className='flex flex-col gap-2 md:col-span-2'>
                <label htmlFor="message" className='text-xl'>Mensaje <span className='text-primary'>*</span></label>
                <textarea placeholder='Escribe tu mensaje...' id="" aria-invalid={errors.message ? "true" : "false"} className='border-b-foreground-muted border-b-2 focus:outline-none focus:bg-foreground/10 py-2 resize-none' {...register('message', { required: true })} />
                {errors.message?.type === "required" && (
                    <p role="alert" className='text-primary'>Debes escribir un mensaje</p>
                )}
            </div>
            <div className='col-span-1 self-center'>
                <p className='text-foreground-muted'>Todos los campos marcados con (<span className='text-primary'>*</span>) son obligatorios.</p>
            </div>
            <div className='col-span-1 md:ml-auto'>
                <Button buttonType='submit' color='accent' type='outline' disabled={!isValid}>Enviar</Button>
            </div>
        </form>
    )
}