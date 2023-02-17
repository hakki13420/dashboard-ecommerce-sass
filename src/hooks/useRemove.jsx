const useRemove = () => {
  const remove=(rows, setRows,id)=>{
    window.confirm("are you sure ?")
    &&
    setRows(rows.filter(el=>{
      return el.id!==id
    }))
  }

  return remove
}

export default useRemove