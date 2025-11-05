<h1>Danh sach users</h1>

<ul>
    
@foreach($users as $user)

<li>{{ $user->id }}. {{ $user->name }}, </li>

@endforeach    

</ul>
