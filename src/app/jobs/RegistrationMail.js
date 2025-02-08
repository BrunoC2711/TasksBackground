import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {

    },
    async handle({ data }) {
        const {user} = data;
        
        await Mail.sendMail({
            from: 'Me <bruno@gmail.com',
            to: `${user.name} <${user.email}>`,
            subject: 'User register',
            html: `Hello, ${user.name}, welcome!!`
        })
    }
}