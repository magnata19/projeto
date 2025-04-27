import dotenv from 'dotenv'
dotenv.config()

test('Deve somar dois números', () => {
    const PORT = process.env.PORT
    expect(PORT).toBeDefined()
    expect(PORT).toBe('3000')
})