#!/bin/bash

# Check if a name was provided
if [ -z "$1" ]; then
  echo "Usage: $0 ComponentName"
  exit 1
fi

NAME=$1
FOLDER="./$NAME"

# Create the folder
mkdir -p "$FOLDER"

# Create the .tsx file
cat > "$FOLDER/$NAME.tsx" <<EOL
import Styles from './$NAME.module.css';

export default function $NAME() {
  return (
    <div className={Styles.container}>
      $NAME component
    </div>
  );
}
EOL

# Create the CSS module
cat > "$FOLDER/$NAME.module.css" <<EOL
.container {
  /* styles for $NAME */
}
EOL

echo "✅ Created $FOLDER with $NAME.tsx and $NAME.module.css"
