find ./src -iname "*.js" -exec grep -q 'import React' {} \; -exec mv "{}" "{}x" \;