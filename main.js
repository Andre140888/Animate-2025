const name_element = document.getElementById("name")

var data = [
    {name:"Gerard", src:"videos/video-1.mp4"},
    {name:"Pieter", src:"videos/video-2.mp4"},
]

let current_video_position = 0

function next_video() {
    current_video_position += 1;

    if (current_video_position >= data.length) {
        current_video_position = 0;
    }

    let video_src = data[current_video_position].src

    let name = data[current_video_position].name

    name_element.innerHTML = name;

    return video_src
}


const video = document.getElementById("video-element")
video.addEventListener('ended', () => {
    let next_video_src = next_video()

    video.src = next_video_src


});