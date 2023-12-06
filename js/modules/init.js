export async function getEmployees() {
    try {
        const response = await fetch('data/employees.json')
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error)
    }

}


