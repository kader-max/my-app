import './Header.css'

export default function Post({PTitle,PBody}){
    return (
        <div className={'p'}>
        <h2>{PTitle}</h2>
        <hr />
        <p>{PBody}</p>
        </div>
    )
}