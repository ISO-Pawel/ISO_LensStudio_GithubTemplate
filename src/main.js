import {
    bootstrapCameraKit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function(){
const cameraKit = await bootstrapCameraKit({apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzA5ODE3NTQ1LCJzdWIiOiI3MjE0YjdjNi0zZTIzLTRhOWMtOTkwMS0xNjI4YjUxOGNiMGV-U1RBR0lOR341YmYwZDhhNy1jZjhjLTRjMmMtYjgyNS0zNDY1YjY2MjAyOTcifQ.N631Sj7y6GckzndOhaDB87gbC0vx8DCMSk2ci_24Aoo'});

const session = cameraKit.createSession()
document.getElementById('canvas').replaceWith(session.output.live)

const {lenses} = await cameraKit.lensRepository.loadLensGroups(['ecfa18a7-3d4b-42e0-8535-c1c3af0ef8a4'])

session.applyLens('3b21bf94-5723-494d-91a9-608a384dcfe4')
let mediaStream = await navigator.mediaDevices.getUserMedia({video: 
    {facingMode: 'environment'}
})

const source = createMediaStreamSource(mediaStream, {
    cameraType: 'front'
})

await session.setSource(source)

session.source.setRenderSize(window.innerWidth, window.innerHeight)

(await session).play()

})();

