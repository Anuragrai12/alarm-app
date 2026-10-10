$dirs = @(
    'C:\Users\anura\Downloads', 
    'C:\Users\anura\.android\avd', 
    'C:\Users\anura\.gradle\caches', 
    'C:\Users\anura\AppData\Local\Google\Chrome\User Data\Default\Cache',
    'C:\Users\anura\AppData\Local\Microsoft\VSCode\User\workspaceStorage'
)
foreach ($d in $dirs) {
    if (Test-Path $d) {
        $size = (Get-ChildItem -Path $d -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
        [PSCustomObject]@{
            Path = $d
            SizeGB = [math]::Round($size / 1GB, 2)
        }
    }
}
