var activatedComp=false
$('#competencesTitle').click(function(){
    if(!activatedComp){
        $('#competences').css('display', 'block');
        activatedComp=true;
    }
    else{
        $('#competences').css('display', 'none');
        activatedComp=false;
    }
})

var activatedExp=false
$('#experiencesTitle').click(function(){
    if(!activatedExp){
        $('#experiences').css('display', 'block');
        activatedExp=true;
    }
    else{
        $('#experiences').css('display', 'none');
        activatedExp=false;
    }
})

