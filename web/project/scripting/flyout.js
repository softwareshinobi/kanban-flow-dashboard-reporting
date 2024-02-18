
$(document).ready(function () {
    
	setInterval(loadCurrentProject, 1000 * 1);

    visualizeProjectList();

	setInterval(visualizeProjectList, 1000 * 8);

});

function loadCurrentProject() {

    $('#projectBanner').html(Cookies.get('apiProject'));   

}

function visualizeProjectList() {

	console.debug("enter > visualizeProjectList");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/project/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            injectProjectListData(data);

		},

		error: function (jqXHR, status) {

			console.log("error... / " + jqXHR);

		}

	});

}

function injectProjectListData(responseData) {

    var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {

        console.log("responseData[i].name / " + responseData[i].name);

        trHTML += '<button type="button" class="btn btn-lg btn-warning" onclick="setProject('+responseData[i].name +')" >' + responseData[i].name + '</button>';

        trHTML += '<br/>';
		      
    }

    $('#projectSwitcherArea').html(trHTML);   

}