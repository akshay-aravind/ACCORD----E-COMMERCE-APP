import bcrypt from 'bcryptjs'

const users  = [
    {
        name: 'ADMIN',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('thisisadmin',10),
        isAdmin: true
    },
    {
        name: 'AKSHAY ARAVIND',
        email: 'akshayaravind@gmail.com',
        password: bcrypt.hashSync('thisisakshay',10),
    },
    {
        name: 'GAYATHRI',
        email: 'gayathri@gmail.com',
        password: bcrypt.hashSync('thisisgaya3',10),
    },
]

export default users