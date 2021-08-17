import Box from '@material-ui/core/Box';

export function ColorButtons() {
  return (
    <div className="colorbutton">
      <div className="colorbuttontag">
        <Box bgcolor="text.disabled" color="background.paper" p={2}>
          Primary<br /><span className="tag">#4e73df</span>
        </Box>
      </div>

      <div className="colorbuttontag">
        <Box bgcolor="error.main" color="error.contrastText" p={2}>
          Success<br /><span className="tag">#1cc88a</span>
        </Box>
      </div>
      <div className="colorbuttontag">
        <Box bgcolor="success.main" color="success.contrastText" p={2}>
          Info<br /><span className="tag">#36b9cc</span>
        </Box>
      </div>
      <div className="colorbuttontag">
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
          Warning<br /><span className="tag">#f6c23e</span>
        </Box>
      </div>

      <div className="colorbuttontag">
        <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
          warning.main Primary<br /><span className="tag">#4e73df</span>  </Box>
      </div>
      <div className="colorbuttontag">
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          Primary<br /><span className="tag">#4e73df</span>
        </Box>
      </div>

      <div className="colorbuttontag">
        <Box bgcolor="text.primary" color="background.paper" p={2}>
          Primary<br /><span className="tag">#4e73df</span>
        </Box>
      </div>
      <div className="colorbuttontag">
        <Box bgcolor="text.secondary" color="background.paper" p={2}>
          Primary<br /><span className="tag">#4e73df</span>
        </Box>
      </div>


    </div>
  );
}
