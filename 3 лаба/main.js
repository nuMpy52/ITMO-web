let table = document.createElement('table');
let th = document.createElement('thead');
let tb = document.createElement('tbody');
function generate_id(){
    let id ="";
    for(let i=0;i<3;i++){
        id+=(Math.floor(Math.random()*(9+1)));
    }
    return id;
}
function generate_set_of_letters(){
    let set_of="";
    let alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for(let i=0;i<5;i++ ){
        let number=(Math.floor(Math.random()*(10)));
        set_of+=alphabet[number];
    }
    return set_of;
}
function create_head(){
    let row_1 =document.createElement('tr');
    let head_1=document.createElement('th');
    head_1.innerHTML="номер";
    let head_2=document.createElement('th');
    head_2.innerHTML="id";
    let head_3=document.createElement('th');
    head_3.innerHTML="рандомные 5 цифр";
    row_1.appendChild(head_1);
    row_1.appendChild(head_2);
    row_1.appendChild(head_3);
    th.appendChild(row_1);
}
let rows =1;
function creat_body(){
    for(let l=0;l<2;l++){
        let row_2=document.createElement("tr");
        let row_2_value_1=document.createElement("td");
        row_2_value_1.innerHTML=rows;
        let row_2_value_2=document.createElement("td");
        row_2_value_2.innerHTML=generate_id();
        let row_2_value_3=document.createElement("td");
        row_2_value_3.innerHTML=generate_set_of_letters();
        row_2.appendChild(row_2_value_1);
        row_2.appendChild(row_2_value_2);
        row_2.appendChild(row_2_value_3);
        row_2.id=rows;
        row_2_value_2.id=rows+"l";
        rows++;
        tb.appendChild(row_2);
    }
}
let count =0;
let count_for_else=0;
function create_table(){
    if (count===0) {
        table.appendChild(th);
        table.appendChild(tb);
        document.getElementById('table').appendChild(table);
        create_head();
        creat_body();
        document.getElementById("create_table").removeAttribute("disabled");
        document.getElementById("add_row").removeAttribute("disabled");
        document.getElementById("delete_row").removeAttribute("disabled");
        count = 1;
    }
    else{
        let text=["таблица уже создана","таблица уже создана"];
        if(count_for_else===1){
            alert(text[count_for_else-1]);
        }
        else if(count_for_else===2){
            alert(text[count_for_else-1]);
        }

    }
    count_for_else++;
}
function create_row(){
    let row_2=document.createElement("tr");
    let row_2_value_1=document.createElement("td");
    row_2_value_1.innerHTML=rows;
    let row_2_value_2=document.createElement("td");
    row_2_value_2.innerHTML=generate_id();
    let row_2_value_3=document.createElement("td");
    row_2_value_3.innerHTML=generate_set_of_letters();
    row_2.appendChild(row_2_value_1);
    row_2.appendChild(row_2_value_2);
    row_2.appendChild(row_2_value_3);
    row_2_value_2.id=rows+"l";
    row_2.id=rows;
    rows++;
    tb.appendChild(row_2);
}
function del_row(){
    const form = document.getElementById('form');
    const formData = new FormData(form);
    let idd=formData.get("write_number");
    if (document.getElementById(idd)){
        const del=document.getElementById(idd);
        tb.removeChild(del);
    }
    else{
        alert("введите номер корректно")
    }
}