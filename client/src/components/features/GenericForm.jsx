
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const GenericForm = ({ formConfig, onSubmit, }) => {
  const { inputs, buttonText } = formConfig;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    onSubmit(data);
  };
 
  return (
    <form onSubmit={handleSubmit} >
      {inputs.map((input, index) => (
        <div key={index} className={input.divClassName || ""} style={{display:'flex', justifyContent:'center', minWidthwidth:"100%", }}>
          <TextField
            type={input.type}
            name={input.name}
            label={input.label}
            required={input.required}
            className={input.className || ""}
            id={input.id || ""}
            fullWidth
            variant={input.variant || "standard"}
            sx={{ mt: "15px" }}
          />
        </div>
      ))}
      <Button
        type="submit"
        variant="outlined"
        sx={{
          margin: "5px",
          borderRadius: "50px",
          mt: "20px",

          "&:hover": {
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "white",
            borderRadius: "60px",
          },
        }}
      >
        {buttonText}
      </Button>
   
    </form>
  );
};

export default GenericForm;
