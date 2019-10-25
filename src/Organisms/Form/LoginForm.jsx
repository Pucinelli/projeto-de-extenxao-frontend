import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Login = props => {
	const { handleSubmit } = props
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={values => {
				let errors = {}
				if (!values.email) errors.email = 'Required'
				else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
						values.email
					)
				)
					errors.email = 'Invalid email address'

				return errors
			}}
			onSubmit={(values, { setSubmitting }) => {
				handleSubmit(values)
				setSubmitting(false)
			}}>
			{({ isSubmitting }) => (
				<Form>
					<h4 htmlFor='email'>Email</h4>
					<Field className='form' type='email' name='email' />
					{/* <ErrorMessage name='email' component='div' /> */}

					<h4 htmlFor='password'>Senha</h4>
					<Field className='form' type='password' name='password' style={{ marginBottom: '25px' }} />
					{/* <ErrorMessage name='password' component='div' /> */}

					<div className='row'>
						<div className='col-9'>
							<div className='form-group form-check' style={{ padding: '0' }}>
								<input
									type='checkbox'
									id='cbx'
									style={{ display: 'none' }} />
								<label htmlFor='cbx' className='check'>
									<svg viewBox='0 0 18 18'>
										<path d='M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z'></path>
										<polyline points='1 9 7 14 15 4'></polyline>
									</svg>
								</label>
								<label className='form-check-label' style={{ display: 'unset' }}>
									<a href='http://'>Eu li e aceito os termos e condições de uso</a>
								</label>
							</div>
						</div>
						<div className='col-3'>
							<button
								type='submit'
								className='btn btn-login'
								disabled={isSubmitting}>
								Entrar
							</button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default Login
