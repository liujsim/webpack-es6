### usage

```
import Confirm from 'confirm/index.js'

require('confirm/index.css')

Confirm({ message: 'Are you sure?', cancelButtonText: 'No', confirmButtonText: 'Yes' }, function () {
  // cancelCallback
}, function (){
  // confirmCallback
})
```
