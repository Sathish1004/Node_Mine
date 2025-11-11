export const authcontroller = (req, res) => {
  console.log(req.body);
  const { name, role } = req.body;

  res.status(200).json({
    message: "success",
    data: { name, role },
  });
};

export const paramscontroller = (req, res) => {
  console.log(req.params);

  const { user_id } = req.params;
  // Validate presence
  if (!user_id) {
    return res.status(400).json({ message: "user_id param is required" });
  }

  // Example: return a greeting when user_id is "10"
  if (user_id == "10") {
    return res.status(200).json({
      message: "Hello sathish",
      data: { user_id },
    });
  }

  // If not matched, return a 404 so client knows the id wasn't found
};

export const querycontroller =(req,res) =>{

    console.log(req.query);
    const {id ,name} = req.query;

    res.status(200).json({
        message:" Recived  amor",
        data:{id,name}
    })
    
}
