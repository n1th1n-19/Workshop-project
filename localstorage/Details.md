Grid2 : to divide or to stucture

code from class :

const handleChange = (e) =>{
e.preventDefault()
let emp_id = data.length>0? data[data.lenght -1].emp_id + 1:101
let newEmployee = { ...employee,emp_id}
let allData = [..data , newEmployee]
localStorage.setItem("employee",JSON.stingify(allData))
}
