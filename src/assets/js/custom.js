document.addEventListener('click', function(e){
    if(e.target.id == 'jhmob-menu'){
        document.getElementById('jhmob-mlist').style.display = 'flex';
    }
    else if(e.target.id == 'jhmob-mclose'){
        document.getElementById('jhmob-mlist').style.display = 'none';
    }
    else if(e.target.classList.contains("jmj-faq-head") || e.target.parentNode.classList.contains("jmj-faq-head") || e.target.childNodes[0].classList.contains("jmj-faq-head")){
        let i;
        console.log(e.target.classList.contains("jmj-faq-head"));
        if (e.target.classList.contains("jmj-faq-head")){
            i = e.target;
        }
        else if(e.target.parentNode.classList.contains("jmj-faq-head")){
            i = e.target.parentNode;         
        }
        else{
            i = e.target.childNodes[0];
        }
        if(i.nextSibling.classList.contains("jmj-faq-para-show")){
            closeAllFaqs()
            i.nextSibling.classList.toggle("jmj-faq-para-hide", true);
            i.nextSibling.classList.toggle("jmj-faq-para-show", false);
        }
        else{
            closeAllFaqs()
            i.nextSibling.classList.toggle("jmj-faq-para-hide", false);
            i.nextSibling.classList.toggle("jmj-faq-para-show", true);
        }
    }
});



function closeAllFaqs(){
    let i = document.getElementsByClassName("jmj-faq-para");
    for(let k = 0; k < i.length ; k++){
        i[k].classList.toggle("jmj-faq-para-hide", true);
        i[k].classList.toggle("jmj-faq-para-show", false);
    }
}
