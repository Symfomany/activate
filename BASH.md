# Bash File

```
    #!/bin/bash
    echo "Countdown"

    for (( c=$START; c<=$END; c++ ))
    do
        echo -n "$c "
        sleep 1
    done

    echo
    echo "Boom!"
```

echo $SHELL
echo $HOME
