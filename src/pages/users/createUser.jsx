import './createUser.scss'

const CreateUser=()=>{
  return (
    <div className="createUser">
    <div className="createUserContainer">
      <h3>New User</h3>
      <form className="createUserForm">
        <div className="formItem">
          <label htmlFor="username">Username</label>
          <input type="text" className="username" />
        </div>
        <div className="formItem">
          <label htmlFor="fullName">fullname</label>
          <input type="text" />
        </div>
        <div className="formItem">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div className="formItem">
          <label htmlFor="email">Email</label>
          <input type="email" className="email" />
        </div>
        <div className="formItem">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="phone" />
        </div>
        <div className="formItem">
          <label htmlFor="adress">Adress</label>
          <input type="text" className="adress" />
        </div>
        <div className="formItem">
          <label>Genre</label>
          <div className="genreContainer">
            <label htmlFor="genre">Masculin</label>
            <input type="radio" name="genre" value="M" className="genre" />
            <label htmlFor="genre">Feminin</label>
            <input type="radio" name="genre" value="F" className="genre" />
          </div>
        </div>
        <div className="formItem">
          <label htmlFor="status">Status</label>
          <select name="status" >
            <option value="null" disabled>...select</option>
            <option value="true">activate</option>
            <option value="true">Desactivate</option>
          </select>
        </div>
        <div className="formItem">
          <button className="submitBtn" >Save</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default CreateUser