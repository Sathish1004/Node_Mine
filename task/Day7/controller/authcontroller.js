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
  if (user_id == "10") 
    {
    return res.status(200).json({
      message: "Hello sathish",
      data: { user_id },
    });
  }

};

export const querycontroller =(req,res) =>{

    console.log(req.query);
    const {id ,name} = req.query;

    res.status(200).json({
        message:" Recived  amor",
        data:{id,name}
    })
    
}

export const headercontroller = (req, res) => {
  console.log(req.headers); // view all headers in terminal

  // Extract a custom header (for example: x-api-key or authorization)
  const { 'x-api-key': apiKey, authorization } = req.headers;

  // Send response
  res.status(200).json({
    message: "Header received successfully",
    data: {
      apiKey: apiKey || "No API key header found",
      authorization: authorization || "No Authorization header found"
    },
  });
};

