export NODE_OPTIONS="--max_old_space_size=8192"

# install
pnpm i
time=$(date "+%Y-%m-%d %H:%M:%S")

# build
rm -rf dist
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "build start in $time"
pnpm build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "build end in $time"


