import bcrypt from 'bcryptjs'

const users  = [
    {
        name: 'ADMIN',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'MKBHD',
        email: 'mkbhd@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Mrwhosetheboss',
        email: 'boss@example.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users